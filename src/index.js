import getCats from './cat_api.js';


getCats().
    then(data => {
    
        console.log(data);
    }).
    catch(err => {
        console.log(err);
    })
  
