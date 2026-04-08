const Project = require("../models/Project");

exports.createProject = async (req, res) => {

    try {

        const { name, description } = req.body;

        const project = await Project.create({

            name,
            description,

            owner: req.user._id,

            members: [
                {
                    user: req.user._id,
                    role: "owner"
                }
            ]

        });

        res.status(201).json({
            message: "Project created",
            project
        });

    } catch (error) {

        res.status(500).json({
            message: "Server error"
        });

    }

};