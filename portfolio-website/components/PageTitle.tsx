import Icons from "./Icons";

type props={
    title:string
    icon:IconName
}
const PageTitle = ({ title, icon }:props) => (
    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 border-b-2 border-cyan-500 pb-3">
        <Icons name={icon} className="w-8 h-8 text-cyan-400" />
        {title}
    </h2>
);
export default PageTitle;