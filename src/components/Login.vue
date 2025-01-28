<template>
    <div class="form-floating w-25 m-auto">
        <h2 class="text-center">Login</h2>
        <Input :label="'Email Address'" :type="'email'" />
        <Input :label="'Password'" :type="'password'" />
        <Button type="submit">Login</Button>
        <!-- <div class="text-center">
            <button class="btn btn-primary w-100 py-2"  type="submit">Sign in</button>
        </div> -->
    </div>
</template>

<script>
    export default{

    }
</script>