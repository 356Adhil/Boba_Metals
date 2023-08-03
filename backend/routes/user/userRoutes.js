const express = require('express');
const router = express.Router();
const postController = require('../../controllers/user/userController')

router.get("/",postController.getPosts);
router.post("/",postController.createPost);


module.exports = router;