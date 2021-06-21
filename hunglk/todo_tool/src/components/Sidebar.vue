<template>
    <div class="sidebar">
        <div class="title">
            Simple Sidebar
        </div>
        <div class="menu-items">
            <router-link to="user" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Employee
                </div>
            </router-link>
             <router-link to="project" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Project
                </div>
            </router-link>
            <router-link to="todo" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    To do list
                </div>
            </router-link>
            <router-link to="counter" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                   Counter
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.title {
    color: white;
    font-size: 24px;
    margin-top: 10px;
}

.menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 6px;
}

.menu-items > * {
    margin-top: 60px;
}

.side-btn {
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 300;
    color: white;
    background-color: transparent;
}

.side-btn:focus {
    outline: none;
}

.side-btn.active {
    position: relative;
    background-color: rgb(201, 185, 185);
    color: teal;
    font-weight: 100;
}

.side-btn.active::before {
    top: -30px;
}

.side-btn.active::after {
    bottom: -30px;
}

.side-btn.active::before, .side-btn.active::after {
    position: absolute;
    content: "";
    right: 0;
}

.side-btn.active .link-container::before {
    top: -60px;
}

.side-btn.active .link-container::after {
    bottom: -60px;
    z-index: 99;
}

.side-btn.active .link-container::before, .side-btn.active .link-container::after {
    position: absolute;
    content: "";
    right: 0px;
    background-color: teal;
}
</style>