import { Router } from "express";
import Event from "../model/Event";
const router = Router();

router.get('/:user_id/events', async (req, res) => {
    try {
        const email = req.params.user_id;
        const events = await Event.find({ user_id: email });
        return res.status(200).send(events);
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: "Something went wrong" })
    }
})

router.post('/event', async (req, res) => {
    try {
        const { name, desc, time, email } = req.body;
        const newEvent = new Event({ user_id: email, name, desc, time });
        const eventCreated = await newEvent.save();
        if (eventCreated) {
            return res.status(201).send(eventCreated);
        }
        return res.status(500).send({ message: "Something went wrong!" })
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: "Something went wrong" })
    }
})

router.get('/event/:event_id', async (req, res) => {
    try {
        const event_id = req.params.event_id;
        const event = await Event.findById({ _id: event_id });
        return res.status(200).send(event);
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: "Something went wrong" })
    }
})

router.patch('/event/:event_id', async (req, res) => {
    try {
        const event_id = req.params.event_id;
        const { playlist } = req.body;
        const update = await Event.findByIdAndUpdate(event_id, { playlist: playlist }, { new: true })
        return res.status(201).json({ message: 'Event Updated', result: update });
    } catch (e) {
        res.status(500).send({ message: "Something went wrong" })
    }
})

export default router;