export function guards(to, from, next) {
    next({ name: "login" });
}
