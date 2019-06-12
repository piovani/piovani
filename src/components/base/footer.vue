<template>
    <div id="footer">
        <div id="conteudo">&copy; {{ getAno() }} - Allison Piovani</div>
        <div id="redes-sociais">
            <a class="btn" v-for="(rede, index) in redes" :key="index" :src="rede.link">
                {{ rede.name }}
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer",

        data: () => ({
            redes: [
                {
                    name: 'facebook',
                    icone: 'fab fa-facebook',
                    link: ''
                },
                {
                    name: 'github',
                    icone: 'fab fa-facebook',
                    link: ''
                },
                {
                    name: 'linkedin',
                    icone: 'fab fa-linkedin',
                    link: ''
                },
                {
                    name: 'twitter',
                    icone: 'fab fa-twitter',
                    link: ''
                }
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
