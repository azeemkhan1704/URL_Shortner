const   shorid = require("shortid");
async function handleGenerateNewShortURL(req,res){
    const body=req.body;
    if(!body.url) return res.status(400).json(error : "url is required");
    const shortID = shortid();
    await URL.createObjectURL({
        shortId: shortID,
        redirectURL: body.url,
        visitedHistory: [],
    });
    return res.json({ id: shortID});
}

module.export = {
    handleGenerateNewShortURL,
};