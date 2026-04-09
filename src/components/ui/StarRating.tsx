import { Star } from "lucide-react";

interface StarRatingProps {
    rating: number;
    max?: number;
}

export const StarRating = ({ rating, max = 5 }: StarRatingProps) => {
    return (
        <div className="flex items-center text-center justify-center mb-[2px] size-[50] text-[#f5a623] leading-[1] h-[auto]">
            {Array.from({ length: max }, (_, i) => (
                <Star
                    key={i}
                    className="w-4 h-4"
                    fill={i < rating ? "#facc15" : "none"}
                    stroke={i < rating ? "#facc15" : "#d1d5db"}
                />
            ))}
        </div>
    );
};
