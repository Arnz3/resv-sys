"use client"
import { useDisclosure, Tabs, Tab } from "@nextui-org/react";
import { useState } from "react";
import InfoModal from "./modals/InfoModal";
import MailModal from "./modals/MailModal";
import DashTab from "./tabs/dashTab";

export default function Dashboard({reserveringen}) {
  const [selectedResv, setSelectedResv] = useState();
  const [accepted, setaccepted] = useState(true);
  
  const {isOpen:isOpenInfo, onOpen:onOpenInfo, onOpenChange:openChangeInfo} = useDisclosure();
  const {isOpen:isOpenMail, onOpen:onOpenMail, onOpenChange:openChangeMail} = useDisclosure();

  const handleInfoModal = (resv) => {
    setSelectedResv(resv);
    onOpenInfo();
  }

  const handleMailModal = (resv, accepted, title, body) => {
    setSelectedResv(resv); 
    setaccepted(accepted);
    onOpenMail();
  }

  return (
    <>
      <div className="flex w-full flex-col" > 
        <Tabs aria-label="Options">
          <Tab key="untouched" title="untouched">
            <DashTab
              reserveringen={reserveringen.untouched}
              handleInfo={handleInfoModal}
              handleMail={handleMailModal}
              goedkeuren
              weigeren
            />
          </Tab>
          <Tab key="goedgekeurd" title="goedgekeurd">
            <DashTab 
              reserveringen={reserveringen.goedgekeurd}
              handleInfo={handleInfoModal}
              handleMail={handleMailModal}
              weigeren
            />
          </Tab>
          <Tab key="afgewezen" title="afgewezen">
            <DashTab 
              reserveringen={reserveringen.afgewezen}
              handleInfo={handleInfoModal}
              handleMail={handleMailModal}
              goedkeuren
            />
          </Tab>
        </Tabs>
      </div>
      <InfoModal 
        reservering={selectedResv}
        isOpen={isOpenInfo}
        onOpenChange={openChangeInfo}
      />
      <MailModal 
        reservering={selectedResv}
        isOpen={isOpenMail}
        onOpenChange={openChangeMail}
        accepted={accepted}
      />
    </>
  );
}
