"use client";

import { MagentoCard } from "@/components/Languages/Cards/Magento";
import { ReactCard } from "@/components/Languages/Cards/React";
import { NodeCard } from "@/components/Languages/Cards/Node";
import { DatabasesCard } from "@/components/Languages/Cards/Databases";

const LanguageList = () => {

    return (
        <div className="my-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <MagentoCard />
                <ReactCard />
                <NodeCard />
                <DatabasesCard />
            </div>
        </div>
    )
};

export { LanguageList };