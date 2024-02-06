import Hotel from "../models/Hotel.js";

//create hotels - thực hiện tạo mới hotel
export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(newHotel);
    } catch (err) {
        next(err);
    }
}

// updateHotel - cập nhật hotel
export const updateHotel = async (req, res, next) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updateHotel);
    } catch (err) {
        next(err);
    }
}

//deleteHotel - xoá hotel
export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Đã xoá dữ liệu!");
    } catch (err) {
        next(err);
    }
}

//getHotel - tìm một hotel
export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json(err);
    }
}


//getAllHotel
export const getHotels = async (req, res, next) => {
    const failed = false;
    const err = new Error();
    err.status = 404;
    err.message = "Xin lỗi không thể tìm thấy!";
    if (failed) return next(createError(401, "Bạn chưa được xác minh!!"));
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
}

