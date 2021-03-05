<template>
    <div ref="container" class="max-h-screen overflow-hidden">
        <video
            v-bind="$attrs"
            @click="togglePlay"
            ref="player"
            class="w-full h-full"
        ></video>

        <!-- big play button  -->
        <button
            ref="bigPlay"
            @click="togglePlay"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/12"
        >
            <svg
                class="text-white hover:text-blue"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 77 77"
            >
                <g fill="none" fill-rule="evenodd">
                    <circle
                        cx="38.5"
                        cy="38.5"
                        r="37"
                        stroke="currentColor"
                        stroke-width="3"
                    />
                    <path
                        fill="currentColor"
                        d="M33 27.93v20.14a1 1 0 001.577.817l14.266-10.07a1 1 0 000-1.634l-14.266-10.07A1 1 0 0033 27.93z"
                    />
                </g>
            </svg>
        </button>

        <!-- video toolbar  -->
        <div
            ref="videoToolbar"
            class="hidden w-full absolute left-0 bottom-0 p-2"
        >
            <div class="flex bg-black bg-opacity-30 rounded-sm h-7 px-1">
                <!-- play / pause  -->
                <button
                    class="w-8 flex flex-col justify-center text-white hover:text-blue"
                    @click="togglePlay"
                >
                    <svg
                        class="m-auto w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <!-- icon-play  -->
                        <path
                            v-if="paused"
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M14.376 10.416l-7.599 5.066A.5.5 0 016 15.066V4.934a.5.5 0 01.777-.416l7.599 5.066a.5.5 0 010 .832z"
                        />
                        <!-- icon-pause  -->
                        <path
                            v-else
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M7.5 5a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h1zm5 0a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h1z"
                        />
                    </svg>
                </button>

                <!-- timeline  -->
                <div
                    class="flex-1 relative flex flex-col justify-center ml-1 mr-2.5"
                >
                    <div class="bg-white h-1.5 w-full"></div>
                    <div
                        class="bg-blue h-1.5 absolute text-right"
                        :style="'width:' + progress + '%'"
                    >
                        <!-- <span class="px-1 text-16">{{ time }}</span> -->
                    </div>
                    <input
                        class="w-full h-full absolute cursor-pointer opacity-0"
                        type="range"
                        min="0"
                        max="100"
                        @change="updateProgress"
                    />
                </div>

                <!-- volume -->
                <button
                    class="w-8 flex flex-col justify-center text-white hover:text-blue"
                    @click="toggleMuted"
                >
                    <svg
                        class="m-auto w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <!-- icon sound enabled -->
                        <path
                            v-if="!muted"
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M12 3.07a7.002 7.002 0 010 13.86V14.9a5.002 5.002 0 000-9.8V3.07zm-2.11.658a.5.5 0 01.11.312v11.92a.5.5 0 01-.812.39L5 13H3a1 1 0 01-1-1V8a1 1 0 011-1h2l4.188-3.35a.5.5 0 01.702.078zM12 7.171a3.001 3.001 0 010 5.658V7.17z"
                        />
                        <!-- icon sound disabled -->
                        <path
                            v-else
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M10 11.914v4.046a.5.5 0 01-.812.39L5 13H3a1 1 0 01-1-1V8a1 1 0 011-1h2l.046-.04-2.47-2.47L3.99 3.075 17.425 16.51l-1.415 1.415-1.736-1.736a6.952 6.952 0 01-2.274.74V14.9c.264-.053.52-.127.765-.22L10 11.914zm2-8.843a7.002 7.002 0 015.128 10.315l-1.497-1.498a5.002 5.002 0 00-3.63-6.788V3.07zm0 4.1a3.001 3.001 0 011.988 3.074L12 8.256 12 7.171zM9.89 3.728a.5.5 0 01.11.312v2.218l-1.811-1.81.999-.798a.5.5 0 01.702.078z"
                        />
                    </svg>
                </button>

                <!-- fullscreen -->
                <button
                    class="w-8 flex flex-col justify-center text-white hover:text-blue"
                    @click="toggleFullscreen"
                >
                    <svg
                        class="w-5 m-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <!-- leave-fullscreen  -->
                        <path
                            v-if="fullscreen"
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M6.5 16a.5.5 0 01-.492-.41L6 15.5V14H4.5a.5.5 0 01-.492-.41L4 13.5v-1a.5.5 0 01.41-.492L4.5 12H7a1 1 0 01.993.883L8 13v2.5a.5.5 0 01-.41.492L7.5 16h-1zm6 0a.5.5 0 01-.5-.5V13a1 1 0 011-1h2.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H14v1.5a.5.5 0 01-.5.5h-1zm-8-8a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H6V4.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V7a1 1 0 01-1 1H4.5zM13 8a1 1 0 01-.993-.883L12 7V4.5a.5.5 0 01.41-.492L12.5 4h1a.5.5 0 01.492.41L14 4.5V6h1.5a.5.5 0 01.492.41L16 6.5v1a.5.5 0 01-.41.492L15.5 8H13z"
                        />
                        <!-- enter-fullscreen  -->
                        <path
                            v-else
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M5.5 12a.5.5 0 01.492.41L6 12.5V14h1.5a.5.5 0 01.492.41L8 14.5v1a.5.5 0 01-.41.492L7.5 16H5a1 1 0 01-.993-.883L4 15v-2.5a.5.5 0 01.41-.492L4.5 12h1zm10 0a.5.5 0 01.5.5V15a1 1 0 01-1 1h-2.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H14v-1.5a.5.5 0 01.5-.5h1zm-8-8a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H6v1.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V5a1 1 0 011-1h2.5zM15 4a1 1 0 01.993.883L16 5v2.5a.5.5 0 01-.41.492L15.5 8h-1a.5.5 0 01-.492-.41L14 7.5V6h-1.5a.5.5 0 01-.492-.41L12 5.5v-1a.5.5 0 01.41-.492L12.5 4H15z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            time: '0:00',
            paused: true,
            muted: false,
            fullscreen: false,
            progress: 0
        }
    },

    mounted() {
        let handlePaused = () => {
            this.paused = this.$refs.player.paused
        }

        let handleMuted = () => {
            this.muted = this.$refs.player.muted
        }

        let handleTime = () => {
            let time = Math.round(this.$refs.player.currentTime)

            let minutes = Math.floor(time / 60)
            var seconds = time - minutes * 60

            this.time = `${minutes}:${seconds > 9 ? seconds : '0' + seconds}`
        }

        let handleProgress = () => {
            this.progress = Math.round(
                (this.$refs.player.currentTime / this.$refs.player.duration) *
                    100
            )
        }

        this.$refs.player.addEventListener('play', handlePaused)
        this.$refs.player.addEventListener('pause', handlePaused)
        this.$refs.player.addEventListener('ended', handlePaused)
        this.$refs.player.addEventListener('error', handlePaused)

        this.$refs.player.addEventListener('volumechange', handleMuted)

        this.$refs.player.addEventListener('timeupdate', handleTime)
        this.$refs.player.addEventListener('timeupdate', handleProgress)

        document.addEventListener('audio:plays', () => this.pause())
        document.addEventListener('video:plays', () => this.pause())
    },

    methods: {
        togglePlay() {
            this.$refs.player.paused ? this.play() : this.pause()
        },
        play() {
            this.$refs.bigPlay.style.display = 'none'
            this.$refs.videoToolbar.style.display = 'block'
            document.dispatchEvent(new CustomEvent('video:plays'))
            this.$nextTick(() => this.$refs.player.play())
        },
        pause() {
            this.$refs.player.pause()
        },
        toggleMuted() {
            this.$refs.player.muted = !this.$refs.player.muted
        },
        toggleFullscreen() {
            if (!this.$refs.container.requestFullscreen) {
                return
            }

            if (this.fullscreen) {
                this.fullscreen = false
                return document.exitFullscreen()
            }

            return this.$refs.container.requestFullscreen().then(() => {
                this.fullscreen = true
            })
        },
        updateProgress(event) {
            this.$refs.player.currentTime =
                (this.$refs.player.duration / 100) * event.target.value
        }
    }
}
</script>
