

function PositionDemo () {

    return (
        <div className="space-y-10 p-10">
            <div className="relative bg-blue-200 h-32">
                <div className="absolute bg-blue-500 text-white p-2">
                    absolute
                </div>
            <p className="text-center">Relative container</p>
            </div>

            <div className="fixed top-0 left-0 bg-green-200 h-32 w-full">
                <p className="text-center">Fixed container (scroll to see effect)</p>
            </div>

            <div className="sticky top-20 bg-red-200 h-32">
                <p className="text-center" >Sticky container (scroll to see effect)</p>
            </div>
        </div>
    )
}

export default PositionDemo;