<script>
export default {
    name:'AppeHeader',
    data() {
        return {
            isDarkTheme : false,
            isNavbarOpen : false,
            navLinks:[
                {
                    name:'home',//home must be the first, beacuse of the logo router-link
                    icon:'fa-solid fa-house'
                },
                {
                    name:'projects',
                    icon:'fa-solid fa-compass-drafting'
                },
                {
                    name:'about',
                    icon:'fa-solid fa-circle-info'
                },
            ]
        }
    },
    computed:{
        navbarState(){
            return (this.isNavbarOpen)?'open':'closed'
        },
    }
}
</script>

<template lang="">
    <header class="fixed-top color-scheme-a" :class="navbarState">
        <nav class="navbar navbar-dark navbar-expand-lg">
            <div class="container-lg">
                <!-- route name -->
                <div class="text-capitalize">{{ $route.name }}</div>
                <!-- brand logo -->
                <router-link class="logo position-absolute translate-middle-x top-0 start-50" :to="{name:navLinks[0].name}">
                    <img src="@/assets/images/logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
                </router-link>
                <!-- navbar toggler -->
                <button class="navbar-toggler position-relative border-0" @click="isNavbarOpen = !isNavbarOpen" type="button" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon position-absolute translate-middle-x start-50"></span>
                </button>
                <!-- links -->
                <div class="navbar-collapse flex-grow-0" :class="navbarState" id="navbarNav">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item text-end" :class="($route.name == navLink.name)? 'active fw-bold' : ''" v-for:="navLink in navLinks">
                            <router-link class="text-capitalize" :to="{name:navLink.name}" @click="isNavbarOpen = !isNavbarOpen">
                                <i :class="navLink.icon"></i>
                                {{ navLink.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="overlay" :class="isNavbarOpen ? 'd-block' : 'd-none'" @click="isNavbarOpen = !isNavbarOpen"></div>
</template>

<style lang="scss" scoped>
    header{
        &.open{
            opacity: 1;
            box-shadow: 0 1px 15px 5px #0004;
        }

        .logo{
            padding:12px;
        }

        li{
            padding:.4rem 0;
            margin-left: 1rem;
            &:not(.active) a:hover,
            &.active a{/* every a but the a of .active */
                padding:.4rem 0;
                border-bottom: 2px solid;
            }
            a{
                text-decoration: none;
                padding:.15rem 0;
                border-bottom: 2px solid #0000;
            }
        }
        
        .navbar-toggler:focus{
            box-shadow: none !important;
        }

        #navbarNav{
            transition: all .7s ease-in;
            overflow-y: hidden;
            &.open{
                max-height: 500px;
            }
            &.closed{
                max-height: 0;
            }
        }
    }

    .overlay{
        position: fixed;
        height: 100dvh;
        width: 100%;
        background-color: #0005;
        z-index: 2;
    }

    @media screen and (min-width: 992px) {
        //lg & more
        header {
            &.open{
                box-shadow: none;
            }
            #navbarNav.closed{
                max-height: 500px !important;
            }
        }
    }
</style>