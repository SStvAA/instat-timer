// const gsheets = require('gsheets');
const GSheetReader = require('g-sheets-api');


(async () => {
    try{
        const options = {
            apiKey: 'AIzaSyBqP3GgT5C1oIcEk0s3XytKvqYs_DMRcs8',
            sheetId: '14BUtADPLurOorNYqXKnM_1bIAbkLXKxpmUl2E7seWik',
            sheetName: 'FEB',
            returnAllResults: true
        }

        GSheetReader(options, response => {
            for(const row of response){
                if(row.Nombre !== ''){
                    console.log(row);
                }
            }
        }).catch(error => {
            console.error(error);
        })

    }catch(error){
        console.error(error)
    }
    

})();


// (async () => {
//     try{
//         const response = await gsheets.getWorksheet('14BUtADPLurOorNYqXKnM_1bIAbkLXKxpmUl2E7seWik', 'FEB', 'AIzaSyBqP3GgT5C1oIcEk0s3XytKvqYs_DMRcs8');
//         for(const row of response.data){
//             if(row.Nombre !== null){
//                 console.log(row.Nombre);
//                 console.log(row);
//             }
            
//         }
//     }catch(error){
//         console.error(error)
//     }
    

// })();
