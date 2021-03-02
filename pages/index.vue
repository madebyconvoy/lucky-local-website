<template>
    <div>
        <div class="relative pt-20 md:pt-56 pb-20 md:px-7">
            <div
                aria-hidden="true"
                class="hidden md:block absolute right-0 top-0 bottom-0 bg-gray-100 w-2/3 z-0"
            ></div>

            <Container
                class="md:flex md:flex-row-reverse items-center relative md:space-x-reverse md:space-x-4"
            >
                <JoinIllustration
                    class="w-full md:w-1/2 bg-gray-100 md:bg-transparent"
                />
                <div class="w-full md:w-1/2 p-5 md:p-0">
                    <div
                        class="w-full xl:w-2/3 mx-auto text-blue space-y-6 lg:space-y-10"
                    >
                        <Heading :level="1" class=""
                            >Gemeinsam stark im lokalen Einzelhandel</Heading
                        >
                        <Paragraph
                            >Als Lucky Local Partner bist du Teil eines
                            leistungsstarken Werbe-Netzwerks im direkten
                            Lebensumfeld deiner Zielgruppe. Sichere dir dein
                            Display und schalte deine Werbung bei anderen Lucky
                            Local Partnern in deiner Nachbarschaft.</Paragraph
                        >
                        <a
                            class="block md:inline-block"
                            href="mailto:info@luckylocal.de?subject=Beratungstermin&body=Liebes%20Lucky%20Local%20Team%2C "
                        >
                            <Button class="px-10 w-full md:w-auto"
                                >Lucky Local Partner werden</Button
                            >
                        </a>
                    </div>
                </div>
            </Container>

            <div class="h-56 mt-6 md:mt-8 lg:mt-10 xl:mt-20">
                <div
                    class="transform scale-75 md:scale-100 mx-auto w-56 h-56 md:absolute md:left-1/3 md:-translate-x-1/2"
                >
                    <Spinner />
                </div>
            </div>
        </div>

        <div class="bg-blue text-white px-7 py-16 md:py-32">
            <Container class="md:flex items-center justify-center xl:w-10/12">
                <fade-in-on-scroll
                    :delay="0"
                    class="flex flex-wrap items-end justify-center w-8/12 sm:w-full m-auto md:w-7/12 sm:space-x-6 lg:space-x-10 sm:flex-no-wrap font-title text-16 md:text-18 mb-4 md:mb-0"
                >
                    <div
                        class="flex justify-between items-end space-x-4 md:space-x-6 lg:space-x-10"
                    >
                        <figure class="relative flex-auto mb-24">
                            <img src="@/assets/display-32.png" alt="" />
                            <figcaption
                                class="absolute bottom-0 left-1/2 pt-4 transform -translate-x-1/2 translate-y-full flex flex-col items-center"
                            >
                                <span class="font-extrabold">32"</span>
                                <span class="text-blue-500 italic">Indoor</span>
                            </figcaption>
                        </figure>
                        <figure class="relative flex-auto mb-24">
                            <img src="@/assets/display-43.png" alt="" />
                            <figcaption
                                class="absolute bottom-0 left-1/2 pt-4 transform -translate-x-1/2 translate-y-full flex flex-col items-center"
                            >
                                <span class="font-extrabold">43"</span>
                                <span class="text-blue-500 italic">Indoor</span>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        class="flex justify-between items-end space-x-4 md:space-x-6 lg:space-x-10"
                    >
                        <figure class="relative flex-auto mb-24">
                            <img src="@/assets/display-32.png" alt="" />
                            <figcaption
                                class="absolute bottom-0 left-1/2 pt-4 transform -translate-x-1/2 translate-y-full flex flex-col items-center"
                            >
                                <span class="font-extrabold">32"</span>
                                <span class="text-blue-500 italic"
                                    >Schaufenster</span
                                >
                            </figcaption>
                        </figure>
                        <figure class="relative flex-auto mb-24">
                            <img src="@/assets/display-46.png" alt="" />
                            <figcaption
                                class="absolute bottom-0 left-1/2 pt-4 transform -translate-x-1/2 translate-y-full flex flex-col items-center"
                            >
                                <span class="font-extrabold">55"</span>
                                <span class="text-blue-500 italic"
                                    >Schaufenster</span
                                >
                            </figcaption>
                        </figure>
                    </div>
                </fade-in-on-scroll>
                <div class="w-full md:w-5/12">
                    <div class="w-full md:w-10/12 ml-auto text-lg space-y-6">
                        <Heading :level="2">Mehr als ein Bildschirm!</Heading>
                        <Paragraph
                            >Wähle das passende Display für deinen Shop. Zwei
                            leuchtstarke Modelle eignen sich besonders für eine
                            Installation im Schaufenster. Die Bildschirme sind
                            in schwarz und weiß erhältlich.</Paragraph
                        >
                    </div>
                </div>
            </Container>
        </div>

        <div class="md:px-7 pt-16 md:py-32 text-blue space-y-16 md:space-y-40">
            <Container class="pb-10">
                <div
                    class="px-7 md:px-0 md:w-5/6 mx-auto md:flex justify-between"
                >
                    <div class="md:w-2/5 space-y-6 mb-6">
                        <Heading
                            >Display für deinen Shop – Modernes POS
                            Marketing</Heading
                        >
                        <Paragraph
                            >Mit den Lucky Local Display schaffst du ein
                            herausragendes Kunden-erlebnis und eine innovative
                            Geschäftsatmosphäre. Kommuniziere deine Angebote
                            zeitgemäß und steigere so deinen Umsatz</Paragraph
                        >
                    </div>
                    <div class="md:w-1/2 relative" aria-hidden="true">
                        <div class="hidden md:block absolute top mt-20 w-4/5">
                            <div class="relative pt-16/9 bg-gray-100"></div>
                        </div>
                        <div
                            aria-hidden="true"
                            class="ml-auto md:w-4/5 md:pb-20"
                        >
                            <div class="relative">
                                <Player
                                    :src="require('~/assets/lucky-local.mp4')"
                                    :poster="
                                        require('~/assets/lucky-local-poster.jpg')
                                    "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container>
                <div
                    class="md:w-5/6 mx-auto md:flex items-center justify-between"
                >
                    <div class="md:w-3/5 mb-6 md:mb-0">
                        <div class="relative">
                            <MapIllustration />
                            <div
                                class="absolute inset-0 flex items-center justify-center"
                            >
                                <div
                                    class="p-5 lg:p-10 text-blue bg-white shadow-lg w-2/3 space-y-6"
                                >
                                    <Heading>Reichweite im Netz</Heading>
                                    <Heading :level="3"
                                        >Erhöhe deine Bekanntheit und bewerbe
                                        deine Angebote auf den Displays aller
                                        anderen Lucky Local Partnern in deiner
                                        Nähe.</Heading
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-7 md:px-0 md:w-1/3 space-y-6">
                        <Paragraph>
                            Als Lucky Local Partner wirst Du Teil einer
                            leistungs-straken Community und kannst deine
                            Angebote und Serviceleistungen auf den Displays
                            aller anderen Lucky Local Partnern in deiner Nähe
                            präsentieren.
                        </Paragraph>
                    </div>
                </div>
            </Container>

            <Container>
                <div
                    class="px-7 md<:px-0 md:w-5/6 mx-auto md:flex items-center justify-between"
                >
                    <div class="md:w-2/5 space-y-6 mb-6 md:mb-0">
                        <Heading
                            >Dein Spot bis zu 61.000 mal im Monat
                            ausgestrahlt</Heading
                        >
                        <Paragraph>
                            43.000 Ausstrahlungen/ Monat für deine eigene
                            Instore-Kommunikation und bis zu 18.000
                            Einblendungen bei allen anderen Lucky Local Partnern
                            deiner Nachbarschaft
                        </Paragraph>
                    </div>
                    <div class="md:w-1/2 relative" aria-hidden="true">
                        <fade-in-on-scroll>
                            <img
                                src="@/assets/numbers-01.svg"
                                alt=""
                                class="absolute top-0 left-0"
                                style="width: 48.58%;"
                            />
                            <img
                                src="@/assets/numbers-02.svg"
                                alt=""
                                class="absolute top-0 right-0"
                                style="width: 48.58%;"
                            />
                            <img
                                src="@/assets/numbers-03.svg"
                                alt=""
                                class="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                                style="width: 48.58%;"
                            />
                        </fade-in-on-scroll>
                        <div
                            class="relative"
                            style="padding-bottom: 93.617%;"
                        ></div>
                    </div>
                </div>
            </Container>

            <Container>
                <div
                    class="px-7 md:px-0 md:w-5/6 mx-auto md:flex md:flex-row-reverse items-center justify-between"
                >
                    <div class="md:w-1/3 space-y-6 mb-6 md:mb-0">
                        <Heading
                            >Einfach und jederzeit steuerbar in der Lucky Local
                            App</Heading
                        >
                        <Paragraph>
                            Gestalte deinen Spot und schalte deine Werbung bei
                            allen anderen Lucky Local Partnern in deiner
                            Nachbarschaft. Einfach und jederzeit per App.
                        </Paragraph>
                    </div>
                    <div
                        class="-mx-7 md:mx-0 md:w-3/5 bg-blue-50 md:bg-transparent py-17"
                    >
                        <AppIllustration />
                    </div>
                </div>
            </Container>

            <Container class="pt-20 md:pb-32">
                <div class="relative mx-auto md:w-10/12 md:flex justify-end ">
                    <div class="md:w-7/10 md:flex items-center relative">
                        <div
                            class="absolute w-22 md:w-2/12 transform left-1/2 -translate-y-1/2 md:top-1/2 md:left-0 -translate-x-1/2 md:transform-y-0"
                        >
                            <fade-in-on-scroll>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 117 118"
                                >
                                    <g fill="none" fill-rule="evenodd">
                                        <path
                                            stroke="#003F86"
                                            stroke-width="7.8"
                                            d="M58.776 4.813c29.804 0 53.964 24.16 53.964 53.963 0 9.855-2.641 19.093-7.255 27.044l6.575 16.829a7.8 7.8 0 01-9.712 10.245l-18.745-6.191h0c-7.432 3.858-15.875 6.037-24.827 6.037-29.803 0-53.964-24.16-53.964-53.964 0-29.803 24.16-53.964 53.964-53.964z"
                                        />
                                        <path
                                            fill="#003F86"
                                            fill-rule="nonzero"
                                            d="M57.984 77.193c1.308 0 2.409.463 3.302 1.388.893.925 1.339 2.066 1.339 3.421 0 1.506-.467 2.69-1.402 3.55-.934.861-2.014 1.292-3.239 1.292-1.266 0-2.372-.425-3.317-1.275-.945-.85-1.417-2.039-1.417-3.567 0-1.355.457-2.496 1.37-3.421.914-.925 2.035-1.388 3.364-1.388zm2.424-45.037c9.575 0 14.717 5.503 14.717 12.868 0 3.757-2.521 7.966-6.186 11.554l-.658.626c-4.017 3.717-5.366 5.815-6.098 8.108l-.506 1.617c-.639 1.937-1.546 3.87-3.74 3.87l-.173-.004-.397-.04c-1.273-.19-3.198-1.114-3.198-4.678 0-1.51.188-2.318.541-3.272l.343-.872c.574-1.422 2.24-3.654 3.19-4.729l.396-.439.86-.904 1.74-1.812 1.341-1.436 1.671-1.686c1.527-1.584 2.894-3.348 2.894-5.903 0-3.716-2.595-5.859-6.737-5.859-3.894 0-6.473 2.14-8.305 4.247l-.653.784-1.123 1.457c-.708.93-1.88 1.653-2.625 1.653-2.01 0-3.23-.698-3.674-2.509-.444-1.811.112-3.4 1.217-4.885 1.935-2.603 3.276-3.826 5.859-5.306s5.86-2.45 9.304-2.45z"
                                        />
                                    </g>
                                </svg>
                            </fade-in-on-scroll>
                        </div>

                        <div class="bg-blue-50 flex-1 md:px-7">
                            <div
                                class="space-y-6 py-20 md:py-11 w-96 mx-auto px-7 md:px-0 text-center md:text-left"
                            >
                                <Heading>Wie können wir dir helfen?</Heading>
                                <Heading :level="3"
                                    >Du hast eine Frage oder möchtest mit uns
                                    über eine mögliche Zusammenarbeit sprechen?
                                    Unser Team hilft dir jederzeit gerne
                                    weiter!</Heading
                                >

                                <a
                                    href="mailto:sales@luckylocal.de"
                                    class="mb-4 block"
                                >
                                    <Button type="primary"
                                        >Jetzt Beratungstermin
                                        vereinbaren</Button
                                    >
                                </a>
                                <a href="tel:+4940303841514" class="block">
                                    <Button
                                        type="secondary"
                                        class="flex items-center space-x-2"
                                    >
                                        <svg
                                            class="w-12 flex-grow-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 47 47"
                                        >
                                            <g fill="none" fill-rule="evenodd">
                                                <circle
                                                    cx="23.5"
                                                    cy="23.5"
                                                    r="23.5"
                                                    fill="#F2F5F9"
                                                />
                                                <path
                                                    stroke="#003F86"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M14.893 27.373c-3.897-6.816-2.176-13.078 1.364-15.056 2.024-1.131 3.961-1.653 5.812-1.567l1.09 1.073-1.266 6.173-3.75 1.254c.303 2.22 1.023 4.41 2.16 6.57 1.274 1.9 2.752 3.506 4.436 4.82l.364.277L28.1 28.4l6.155 2.025.415 1.45c-.847 1.595-2.283 2.958-4.307 4.089-3.54 1.978-10.002.29-14.15-6.386l-.003.001-1.317-2.207z"
                                                />
                                            </g>
                                        </svg>
                                        <span class="flex-1">
                                            040 / 303841514
                                        </span>
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

        <div class="bg-blue text-white py-16 md:py-32">
            <Container>
                <div
                    class="w-10/12 md:3/4 lg:w-1/2 m-auto space-y-6 text-center mb-6 md:mb-8 lg:mb-12"
                >
                    <Heading
                        >Viele kostenlose Vorlagen zur einfachen und schnellen
                        Gestaltung deines Spots</Heading
                    >
                </div>
            </Container>
            <cases-slider />
        </div>

        <div class="px-7 py-16 md:py-32 text-blue space-y-16 relative ">
            <div
                aria-hidden="true"
                class="absolute left-0 top-0 bottom-0 bg-gray-100 w-1/2"
            ></div>

            <Container class="relative">
                <Heading class="text-center mb-6 md:mb-8 lg:mb-12"
                    >Deine Vorteile – Unser Service</Heading
                >
                <CardList
                    class="w-full md:w-8/12 lg:w-6/12 flex flex-col flex-wrap m-auto"
                    :items="[
                        'Aufwertung deines Shops durch hochwertiges POS-Display',
                        'Aufbau, Wartung und Betrieb deines Displays',
                        'Große Auswahl an Screens. Vier Varianten in schwarz oder weiß! Auch fürs Schaufenster geeignet!',
                        'Kostenloser Austausch bei Defekt',
                        'Werbung ohne Streuverluste im direkt Lebensumfeld deiner Zielgruppe',
                        'Kostenlose Software zur Gestaltung deines Spots und Steuerung deiner Kampagne',
                        'Einfache, flexible Steuerung deiner Kampagnen per App',
                        'Auf Wunsch: Professionelle Gestaltung deiner Werbeanzeige'
                    ]"
                />
            </Container>
        </div>
    </div>
</template>

<script>
import Player from '@/components/Player'
import Spinner from '@/components/Spinner'
import CardList from '@/components/CardList'
import CasesSlider from '@/components/CasesSlider.vue'

import AppIllustration from '@/components/illustrations/App'
import JoinIllustration from '@/components/illustrations/Join'
import MapIllustration from '@/components/illustrations/Map'
import FadeInOnScroll from '@/components/transitions/FadeInOnScroll'

import { Button, Container, Heading, Paragraph } from '@/components/utils'

export default {
    components: {
        AppIllustration,
        Button,
        CardList,
        CasesSlider,
        Container,
        FadeInOnScroll,
        Heading,
        JoinIllustration,
        MapIllustration,
        Paragraph,
        Player,
        Spinner
    }
}
</script>
