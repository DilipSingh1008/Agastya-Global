const Setting = require("../models/settings.js");

exports.getSocialSetting = async (req, res) => {
  try {
    const setting = await Setting.findOne({ section: "social" });
    if (!setting) {
      return res.status(404).json({
        success: false,
        message: "Social setting not found",
      });
    }

    res.status(200).json({
      success: true,
      data: setting,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.updateSocialSetting = async (req, res) => {
  try {
    const { facebook_link, instagram_link, linkedin_link } = req.body;
    console.log(facebook_link, instagram_link, linkedin_link);

    const setting = await Setting.findOneAndUpdate(
      { section: "social" },
      {
        facebook_link: facebook_link,
        instagram_link: instagram_link,
        linkedin_link: linkedin_link,
      },
      { new: true, upsert: true },
    );

    res.status(200).json({
      success: true,
      message: "Social setting updated",
      data: setting,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
