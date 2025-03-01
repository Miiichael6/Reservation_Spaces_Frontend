import useHttp from "@/adapters/axiosAdapter/axiosAdapter"

function getSlotRepository () {
    const { httpPost } = useHttp()
    const getAll = () => {
        const slots = httpPost({ url: "/bookings/find-bookings-info" })
        return slots;
    }

    return {
        getAll,
    }
}

export const SlotRepository = getSlotRepository()