const router = require("express").Router();
const jwt = require("jsonwebtoken");
const multer = require('multer')
const User = require("../models/UserModels");
const bcrypt = require("bcryptjs");
const Joi = require("@hapi/joi");
const upload = multer({ dest: 'uploads/' })
const fs = require('fs');
const pem = require("pem");

const registerSchema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
});


router.post("/register", async (req, res) => {
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Check if the user is already in the db
    const usernameExists = await User.findOne({ username: req.body.username });

    if (usernameExists) return res.status(500).send("Username already exists");

    //hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const user = new User({
        username: req.body.username,
        password: hashPassword,
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post("/login", async (req, res) => {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ username: req.body.username });

    if (!user) return res.status(400).send("Username or password is wrong");

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Username or password is wrong");

    //Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: 300 // expires in 5min
    });
    res.header("auth-token", token).send(token);
});

router.post("/certificate", upload.single('file'), async (req, res) => {
    //Verificate that the file is a certificate
    if (req.file.originalname.split('.').pop() != "pfx") {
        return res.status(400).send("The file is not a certificate");
    };

    pfx = fs.readFileSync(req.file.path, 'utf8');
    console.log(pfx);
    pem.readPkcs12(pfx, { p12Password: "1234" }, (err, cert) => {
        console.log(cert);
    });
    /*try {
        
        caStore = pki.createCaStore([caCert]);
    } catch (e) {
        return res.status(400).send("Error in the verification of the certificate");
    }
    try {
        console.log(pki.verifyCertificateChain(caStore, [cert]));
    } catch (e) {
        return handleResponse(new Error('Failed to verify certificate (' + e.message || e + ')'));
    }
    console.log(caCert);*/
    /*allowedThumbprints = ["B521E19F8568DDD69CA025118DC95B4883637C64"];
    if (allowedThumbprints.Contains(clientCertificate.Thumbprint)) {
        res.status(200);
    }*/

    return res.status(400).send("The certificate is not correct");
});

module.exports = router;