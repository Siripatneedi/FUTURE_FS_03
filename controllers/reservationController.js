const Reservation = require("../models/Reservation");

const createReservation = async (req, res) => {

    try {

        const reservation = await Reservation.create(req.body);

        res.status(201).json({
            success: true,
            reservation
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getReservations = async (req, res) => {

    const reservations = await Reservation.find();

    res.json(reservations);

};

module.exports = {
    createReservation,
    getReservations
};