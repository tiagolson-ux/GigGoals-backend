import Gig from "../models/Gig.js";

/*
Software T:
This creates a new gig.
The user must be authenticated.
req.user is coming from protect middleware.
*/

export const createGig = async (req, res) => {
  try {
    const { title, description } = req.body;

    const gig = await Gig.create({
      title,
      description,
      user: req.user._id,
    });

    res.status(201).json(gig);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
Software T:
This returns only gigs owned by logged in user.
*/

export const getMyGigs = async (req, res) => {
  try {
    const gigs = await Gig.find({ user: req.user._id });

    res.json(gigs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
