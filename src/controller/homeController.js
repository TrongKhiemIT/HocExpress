import db from "../models/index";

let getHomePage = async (req, res) => {
    try{
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    }catch(e){
        console.log(e);
    }
}

let getAboutPage = (req, res) => {
    return res.render('test/aboutpage.ejs');
}

let getCRUD = (req, res) => {
    return res.send('CRUD');
    // return res.render('test/crud.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD
}