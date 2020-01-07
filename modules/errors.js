
module.exports = {

  // Controller errors
  serverError: 'server error',
  unauthorized: 'you are not authorized to make that request',

  // Module errors
  tooManyProps:        'request contains too many properties',
  noPropsFound:        'no properties were sent with the request',
  missingUserId:       'request is missing required user_id property',
  missingDisplayName:  'request is missing required display_name property',
  missingEmail:        'request is missing required email property',
  missingPassword:     'request is missing required password property',
  missingAlbumTitle:   'request is missing required title property',
  invalidRegisterType: 'invalid registration type',
  incorrectPassword:   'password is not correct',
  invalidProps:        'request props not valid',
  missingMetaName:     'request is missing required name property',
  missingMetaValue:    'request is missing required value property',
  missingAlbums:       'request is missing required albums property',
  missingMedia:        'request is missing required media property',
  missingMediaTitle:   'request is missing required title property',
  selfInvitation:      'cannot invite self to album',

  // Model errors
  userDoesNotExist:        'user does not exist',
  userIdDoesNotExist:      'user id does not exist',
  displayNameDoesNotExist: 'display name does not exist',
  emailDoesNotExist:       'email does not exist',
  invalidProperty:         'invalid property',
  displayNameExists:       'display name already exists',
  emailExists:             'email already exists',
  invalidDisplayName:      'display name is not valid',
  invalidEmail:            'email is not valid',
  invalidPassword:         'password is not valid',
  passwordNotAssociated:   'a password is not associated with that account',
  albumTitleExists:        'album title already exists',
  invalidAlbumTitle:       'album title is not valid',
  invalidAlbumDescription: 'album description is not valid',
  invalidAlbumAccess:      'album access type is not valid',
  albumIdDoesNotExist:     'album id does not exist',
  metaFieldExists:         'a meta field with that name already exists',
  repeatedMetaName:        'meta object contains repeated meta name',
  invalidMetaName:         'meta data field name is not valid',
  invalidMetaValue:        'meta data description is not valid',
  invalidMediaTitle:       'media title is not valid',
  invalidMediaCaption:     'media caption is not valid',
  invalidKeywords:         'media keywords are not valid',
  mediaTitleExists:        'media title already exists',
  mediaIdDoesNotExist:     'media id does not exist',
  keywordIdDoesNotExist:   'keyword id does not exist',
  inviteeIdDoesNotExist:   'invitee id does not exist',
  invitationAlreadyexists: 'an invitation already exists',
  invitationDoesNotExist:  'invite id does not exist',
  alreadyCollaborator:     'user is already a collaborator',

};