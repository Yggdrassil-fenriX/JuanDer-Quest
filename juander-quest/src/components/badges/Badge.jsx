const Badge = (props) => {
    const badgeName = props.badgeName || "";
    const badgeSrc = props.badgeSrc || "";

    return (
        <div className="flex items-center justify-center flex-col gap-1">
            <img src={badgeSrc} alt={`${badgeName} Badge`} className="w-18" />
            <span className="text-xs font-bold">{badgeName}</span>
        </div>
    )
}

export default Badge;