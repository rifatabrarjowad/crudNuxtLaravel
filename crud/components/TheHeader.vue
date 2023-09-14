
import { NuxtLink } from '#build/components';
<template>
    <div>
        <nav class="navbar bg-primary navbar-expand-lg bg-body-tertiary shadow">
            <div class="container">
                <NuxtLink class="navbar-brand" to="/">Navbar</NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NuxtLink class="nav-link active" aria-current="page" to="/">Home</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link active" aria-current="page" to="/about">About</NuxtLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>