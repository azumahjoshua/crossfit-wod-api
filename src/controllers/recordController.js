const recordService = require('../services/recordService/')

const getRecordForWorkout = (req,res)=>{
    try {
        const allrecords = recordService.getRecordForWorkout()
        res.send({
            status: "Ok",
            data: allrecords
        })
    } catch (error) {
        res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

module.exports ={
    getRecordForWorkout
}