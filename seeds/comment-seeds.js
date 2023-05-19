const { Comment } = require('../models');

const commentData = [
  {
    id: 1,
    comment_text: 'Great Work.',
    provider_id: '1',
    services_id: '1',
  },
  {
    id: 2,
    comment_text: 'Impressive!',
    provider_id: '2',
    services_id: '2',
  }
]
const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;
