import News from '../models/News';

export default class SearchForNews {
  static async handleSearchByNews(search) {
    try {
      const news = await News.find({
        $or: [
          { title: { $regex: search, $options: 'si' } },
          { body: { $regex: search, $options: 'si' } },
          { category: { $regex: search, $options: 'si' } },
          { author: { $regex: search, $options: 'si' } },
        ],
      }).sort('-createdAt');

      return news;
    } catch (error) {
      console.logo(error);
      return error;
    }
  }
}
