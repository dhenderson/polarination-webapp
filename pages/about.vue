<template>
    <div class="about">
        <div class="box">
            <h1 class="title is-4">What</h1>
            <p>
                Polarination puts CNN and Fox News headlines side by side, so you can see in real-time how distorted the prominent news sources are for people leaning in either political direction.
            </p>
        </div>
        <div class="box">
            <h1 class="title is-4">Why</h1>
            <p>
                The US is obviously polarized, and 24/7 news operations have found the profit in that political margin.
            </p>
            <p>
                Viewing two news sources with different core audiences side by side illustrates how whatever is happening in our nation at any given time, we are never having one common conversation.
            </p>
        </div>
        <div class="box">
            <h1 class="title is-4">How</h1>
            <p>
                Polarination pulls headline news from CNN and Fox News every 30 minutes using the fabulous <a href="https://newsapi.org">News API</a>. The backend is written in python and hosted on AWS Lambda. The news JSON is cached on S3. 
            </p>
            <p>
                The front-end is built with Vue and Nuxt. You can see the source for the <a href="https://github.com/dhenderson/polarination-webapp">front-end</a> and 
                <a href="https://github.com/dhenderson/polarination-service">back-end</a> on Github.
            </p>
        </div>
        <div class="box">
            <h1 class="title is-4">Who</h1>
            <p>
                Someone like you, sick of watching our country get pulled apart. <a href="https://twitter.com/david_henderson">Say "hi" or report me for being a bot on Twitter</a>.
            </p>
        </div>
    </div>
</template>
<style scoped>
p {margin-bottom: 25px; color: #555;}
</style>