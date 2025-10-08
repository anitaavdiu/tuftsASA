import Member from '../models/member.model.js'

export const getMembers = async (req,res) => {
    try {
        const members = await Member.find({});
        res.status(200).json({ success: true, data: members });
    } catch (error) {
        console.log("Error in fetching members:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const createMember = async (req,res) => {
    const member = req.body; // user sends data
    if (!member.name || !member.email || !member.year) {
        return res.status(400).json({ success:false, message: "Please provide all fields"});
    }

    const newMember = new Member(member)

    try {
        await  newMember.save();
        res.status(201).json({ success: true, data: newMember });
    } catch (error) {
        console.error("Error in create member:", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
};

export const updateMember = async (req, res) => {
    const { id } = req.params;

    const member = req.body;

    if (!member.name || !member.email || !member.year) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    try {
        const updatedMember = await Member.findByIdAndUpdate(id, member, {new:true});
        if (!updatedMember) {
            return res.status(404).json({ success: false, message: "Member not found" });
        }
        res.status(200).json({success: true, data: updatedMember});
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const deleteMember = async (req, res) => {
    const {id} = req.params;
    console.log("id:", id);
    try {
        const deletedMember = await Member.findByIdAndDelete(id);

        if (!deletedMember) {
        return res.status(404).json({ success: false, message: "Member not found" });
        }

        res.status(200).json({ success: true, message: `Member ${id} deleted successfully` });
    } catch (error) {
        console.error("Error deleting member:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    } 
};