import menuRepository from "./menuRepository";

export default ($axios) => ({
    menu: menuRepository($axios)
})