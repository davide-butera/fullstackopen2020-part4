const _ = require('lodash');

// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => 1;

/* sum of all likes */
const totalLikes = (blogs) => ((blogs.length === 0) ? 0
  : blogs
    .map((item) => item.likes)
    .reduce((prev, next) => prev + next));

const findFavoriteBlog = (blogs) => blogs
  .reduce((max, blog) => (max.likes > blog.likes ? max : blog));

const favoriteBlog = (blogs) => ((blogs.length) === 0 ? {} : findFavoriteBlog(blogs));

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return {};
  }

  const author = _(blogs)
    .map('author')
    .countBy()
    .toPairs()
    .max(_.last);
  return { author: author[0], blogs: author[1] };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
};
