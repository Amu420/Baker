const logout = (req, res) => {
    try{
        if(!req.cokkies.tokken){
            return res.status(400).json({error: "no tokken found"});
        }

        //clear the token cookie
        res.clearCookie("tokken");

        //respond with success message
        return res.status(200).json({
            message:"logout Sucessfully",
            success:true    
        });
    } catch (error) {
        return res.status(500).json({
            error:error.message
        });
    }
};

export default logout;