const { collaborator } = require('../../data/models/models');
const errors = require('../../modules/modules').errors;

const getCollaborators = (req, res, next) => {

  const album_id = parseInt(req.params.album_id);

  try {

    if (req.isOwner || req.isAdmin) {

      collaborator.getCollaborators(album_id, (collabErr, collabArr) => {

        if (collabErr) next(collabErr);
        else {

          res.status(200).json(collabArr);

        }

      });

    } else next(new Error(errors.unauthorized));

  } catch(err) {
    console.error(err);
    next(err);
  }

};

const deleteCollaborator = (req, res, next) => {



};

module.exports = {
  getCollaborators,
  deleteCollaborator,
};