import { Router } from "express";
import Event from "../model/Event";
const router = Router();

router.get('/user/:id/events', async (req, res) => {
    try {
        const id = req.params.id;
        const events = await Event.findById({ user_id: id });
        return res.status(200).send(events);
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: "Something went wrong" })
    }
})

router.post('/user/:id/event', async (req, res) => {
    try {
        const id = req.params.id;
        const { name, desc, time } = req.body;
        const newEvent = new Event({ user_id: id, name, desc, time });
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

router.get('/user/:id/event/:event_id', async (req, res) => {
    try {
        const id = req.params.id;
        const event_id = req.params.event_id;
        const event = await Event.findById({ event_id });
        return res.status(200).send(event);
    } catch (e) {
        res.status(500).send({ message: "Something went wrong" })
    }
})

router.patch('/user/:id/event/:event_id', async (req, res) => {
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