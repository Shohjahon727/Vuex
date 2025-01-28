<template>
    <main class="form-signin w-25 m-auto">
        <form>
            <h1 class="h3 mb-3 fw-normal">Please register</h1>

            <Input :label="'Full Name'" :type="'text'" />
            <Input :label="'Email Address'" :type="'email'"/>
            <Input :label="'Password'" :type="'password'" />

            <!-- <div class="form-check text-start my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    Remember me
                </label>
            </div> -->
            <Button type="submit" disabled="isLoading" @click="submitHandler">Register</Button>
        </form>
    </main>
</template>
<script>
export default{
    computed : {
        isLoading() {
            return this.$store.state.auth.isLoading
        }
    },
    methods: {
        submitHandler(e) {
            e.preventDefault()
            this.$store.dispatch('register')
        }
    }
}
</script>