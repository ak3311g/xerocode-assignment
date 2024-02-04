export default function MemberCard({ member }: { member: string }) {
    return (
        <div className="absolute right-0">
            <img src={member} alt="m1"/>
        </div>
    );
}