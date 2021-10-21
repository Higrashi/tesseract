import axios from 'axios'

export const translate = () => {
    let options = {
        method: 'POST',
        url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
        params: {
          to: 'ru',
          'api-version': '3.0',
          profanityAction: 'NoAction',
          textType: 'plain'
        },
        headers: {
       
        },
        data: [{Text: 'I would really like to drive your car around the block a few times.'}]
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

}