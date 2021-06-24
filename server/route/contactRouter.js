const express = require('express')
const crouter = express.Router();
const ContactUser = require('../models/contactSchema')
const auth = require('../middleware/authenticate')
//getall
crouter.get('/getall', async (req, res) => {
  console.log("getdata")
  const data = await ContactUser.find();
  res.send(data)
})
//add data
crouter.post('/addData', auth, async (req, res) => {
  console.log(req.body)

  const { name, email, phone, type } = req.body;

  if (!name || !email || !phone) {
    res.status(402).json({ error: "data add to failed" })
  }
  const dataAdd = new ContactUser({ name, email, phone, type, user: req.userId })
  console.log(req.userId)
  await dataAdd.save()
  res.json(dataAdd)
})
//update data
crouter.patch('/upData/:_id', auth, async (req, res) => {
  // const { name, email, phone, type } = req.body;

  // // build contact object


  try {

    // console.log(req.params._id)
    const _id = req.params._id
    const data = await ContactUser.findOne({ _id: _id })
    //res.json(result)
    if (data) {
      const result = await ContactUser.findByIdAndUpdate(_id, req.body, {
        new: true
      })
      console.log(result)
      res.json(result)
    }
    else {
      res.status(504).json({ error: 'contact not found' })
    }
  } catch (error) {
    res.status(504).json(error)
  }

  // const contactFields = {};
  // if (name) contactFields.name = name;
  // if (email) contactFields.email = email;
  // if (phone) contactFields.phone = phone;
  // if (type) contactFields.type = type;
  // try {
  //   //const _id=req.params.id;
  //     let contact = await ContactUser.findById(req.params._id);
  //     if (!contact) return res.status(404).json({ msg: "Contact not found" });

  //     // Make sure user owns contact
  //     if (contact.user.toString() !== req.user.id) {
  //       return res.status(401).json({ msg: "Not authorized" });
  //     }
  //     contact = await ContactUser.findByIdAndUpdate(
  //       req.params.id,contactFields ,
  //       { new: true }
  //     );
  //     res.json(contact);
  //   } catch (err) {
  //     console.error(err.message);
  //     res.status(500).send("Server error");
  //   }
})
//delete data
crouter.delete('/delData/:_id', auth, async (req, res) => {



  try {
    const _id = req.params._id;
    //console.log(_id)
    const data = await ContactUser.findOne({ _id: _id })
    //console.log(data)
    if (data) {
      const result = await ContactUser.findByIdAndDelete(_id)
      // console.log(data)
      console.log(result)
      res.json(result)
    }
    else{
      res.status(504).json({error:"contact not found"})
    }
  } catch (error) {
    res.status.json(error)
  }
  // try {
  //   let contact = await ContactUser.findById(req.params.id);
  //   if (!contact) return res.status(404).json({ msg: "Contact not found" });

  //   // Make sure user owns contact
  //   if (contact.user.toString() !== req.user.id) {
  //     return res.status(401).json({ msg: "Not authorized" });
  //   }
  //   await ContactUser.findByIdAndRemove(req.params.id);
  //   res.json({ msg: "Contact Removed" });
  // } catch (err) {
  //   console.error(err.message);
  //   res.status(500).send("Server error");
  // }
})
module.exports = crouter