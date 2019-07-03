<template>
    <v-footer dark height="auto">
        <v-card class="flex" tile>
            <v-card-title class="primary">
                <strong class="subheading">&copy;{{getAno()}} – Allison Piovani</strong>

                <v-spacer></v-spacer>

                <v-btn class="mx-4" dark icon>
                    <img src="@/assets/facebook.png" />
                </v-btn>

                <v-btn v-for="rede in redes" class="mx-4 secondary" dark icon>
                    <img :src="rede.icone">
<!--                    <v-icon size="24px">{{ rede.icone }}</v-icon>-->
                </v-btn>
            </v-card-title>
        </v-card>
    </v-footer>
    <!--    <div id="footer">-->
    <!--        <div id="conteudo">&copy; {{ getAno() }} - Allison Piovani</div>-->
    <!--        <div id="redes-sociais">-->
    <!--            <a class="btn" v-for="(rede, index) in redes" :key="index" :src="rede.link">-->
    <!--                {{ rede.name }}-->
    <!--            </a>-->
    <!--        </div>-->
    <!--    </div>-->
</template>

<script>
    export default {
        name: "footer",

        data: () => ({
            redes: [
                {
                    name: 'facebook',
                    icone: '@/assets/facebook.png',
                    link: ''
                }
                // {
                //     name: 'github',
                //     icone: 'fab fa-facebook',
                //     link: ''
                // },
                // {
                //     name: 'linkedin',
                //     icone: 'fab fa-linkedin',
                //     link: ''
                // },
                // {
                //     name: 'twitter',
                //     icone: 'fab fa-twitter',
                //     link: ''
                // }
            ],
            icons: [
                'fab fa-facebook',
                'fab fa-twitter',
                'fab fa-google-plus',
                'fab fa-linkedin',
                'fab fa-instagram'
            ]
        }),

        methods: {
            getAno() {
                let now = new Date;

                return now.getFullYear();
            }
        }
    }
</script>

<style scoped>
    #footer {
        border: black 1px solid;
    }

    #conteudo {
        border: red 1px solid;
    }

    #redes-sociais {
        border: blue 1px solid;
    }
</style>
