const Translater = class {
    constructor(){
        this.loadConfiguration();
        this.generateLangs();
    }

    generateLangs(){
        


    }

    loadConfiguration(){
        try{
            const configuration = (new Configuration('lang-component')).get();
            this.userLang = configuration.userLang;
        }catch(error){
            console.error('Translater:', error);
            this.userLang = 'english';
        }
    }

    translate(text){
        text = text.toLowerCase();
        const key = this.translations[text];
        if(key === undefined || key[this.lang] === undefined){
            return text;
        }

        return key[this.lang];

    }
}


const __ = async function(text, lang){
    setTimeout(()=>{
        return 'test'
    }, 2000);

};