import { GigOperations } from "../config/fileDB.js";

class Gig {
  constructor(gigData) {
    this._id = gigData._id;
    this.company = gigData.company;
    this.title = gigData.title;
    this.description = gigData.description;
    this.jobUrl = gigData.jobUrl;
    this.salary = gigData.salary;
    this.location = gigData.location;
    this.dateApplied = gigData.dateApplied;
    this.status = gigData.status;
    this.contactName = gigData.contactName;
    this.contactEmail = gigData.contactEmail;
    this.resumeLink = gigData.resumeLink;
    this.coverLetterLink = gigData.coverLetterLink;
    this.excitement = gigData.excitement;
    this.user = gigData.user;
    this.createdAt = gigData.createdAt;
    this.updatedAt = gigData.updatedAt;
  }

  static async find(query = {}) {
    const gigsData = await GigOperations.find(query);
    return gigsData.map(gigData => new Gig(gigData));
  }

  static async findById(id) {
    const gigData = await GigOperations.findById(id);
    return gigData ? new Gig(gigData) : null;
  }

  static async create(gigData) {
    const newGig = await GigOperations.create(gigData);
    return new Gig(newGig);
  }

  async save() {
    const updatedGig = await GigOperations.findByIdAndUpdate(this._id, {
      company: this.company,
      title: this.title,
      description: this.description,
      jobUrl: this.jobUrl,
      salary: this.salary,
      location: this.location,
      dateApplied: this.dateApplied,
      status: this.status,
      contactName: this.contactName,
      contactEmail: this.contactEmail,
      resumeLink: this.resumeLink,
      coverLetterLink: this.coverLetterLink,
      excitement: this.excitement,
      user: this.user
    });
    return new Gig(updatedGig);
  }

  async deleteOne() {
    return await GigOperations.findByIdAndDelete(this._id);
  }

  static async findByIdAndDelete(id) {
    const gigData = await GigOperations.findByIdAndDelete(id);
    return gigData ? new Gig(gigData) : null;
  }

  static async findByIdAndUpdate(id, updateData) {
    const gigData = await GigOperations.findByIdAndUpdate(id, updateData);
    return gigData ? new Gig(gigData) : null;
  }

  toJSON() {
    return {
      _id: this._id,
      company: this.company,
      title: this.title,
      description: this.description,
      jobUrl: this.jobUrl,
      salary: this.salary,
      location: this.location,
      dateApplied: this.dateApplied,
      status: this.status,
      contactName: this.contactName,
      contactEmail: this.contactEmail,
      resumeLink: this.resumeLink,
      coverLetterLink: this.coverLetterLink,
      excitement: this.excitement,
      user: this.user,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

export default Gig;
