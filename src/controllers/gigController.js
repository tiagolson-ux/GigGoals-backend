import Gig from "../models/Gig.js";

/*
Create new gig
*/
export const createGig = async (req, res) => {
  try {
    const {
      company,
      title,
      description,
      jobUrl,
      salary,
      location,
      dateApplied,
      status,
      contactName,
      contactEmail,
      resumeLink,
      coverLetterLink,
      excitement
    } = req.body;

    const gig = await Gig.create({
      company,
      title,
      description,
      jobUrl,
      salary,
      location,
      dateApplied,
      status,
      contactName,
      contactEmail,
      resumeLink,
      coverLetterLink,
      excitement,
      user: req.user._id.toString(),
    });

    res.status(201).json(gig.toJSON());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/*
Get all gigs for logged in user
*/
export const getMyGigs = async (req, res) => {
  try {
    const gigs = await Gig.find({ user: req.user._id.toString() });
    res.json(gigs.map(gig => gig.toJSON()));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
Update gig status
*/
export const updateGig = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (!gig) {
      return res.status(404).json({ message: "Gig not found" });
    }

    if (gig.user !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const updatedGig = await Gig.findByIdAndUpdate(req.params.id, req.body);

    res.json(updatedGig.toJSON());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/*
Delete gig
*/
export const deleteGig = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (!gig) {
      return res.status(404).json({ message: "Gig not found" });
    }

    if (gig.user !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await Gig.findByIdAndDelete(req.params.id);

    res.json({ message: "Gig deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
