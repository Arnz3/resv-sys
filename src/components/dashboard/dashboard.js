"use client"
import { useDisclosure, Tabs, Tab, Spinner } from "@nextui-org/react";
import { useState } from "react";
import InfoModal from "./modals/InfoModal";
import MailModal from "./modals/MailModal";
import PrintCards from "./printCards";
import DashTab from "./tabs/dashTab";
import { useQuery } from "react-query";
import axios from "axios";

export default function Dashboard() {
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

  const {isLoading, data, refetch} = useQuery(
    'reserveringen',
    async () => {
      const res = await axios.get("http://localhost:3000/api/reservations");
      return res.data;
    },
    {
      refetchInterval: 10000,
      refetchIntervalInBackground: true,
    }
  )

  if (isLoading){
    return( 
      <div className="flex w-full justify-center h-full items-center">
        <Spinner size="lg"/>
      </div>
    );
  }

  return (
    <>
      <div className="flex w-full flex-col py-3 print:hidden" > 
        <Tabs aria-label="Options">
          <Tab key="untouched" title="untouched" className="text-base">
            <DashTab
              reserveringen={data.untouched}
              handleInfo={handleInfoModal}
              handleMail={handleMailModal}
              goedkeuren
              weigeren
            />
          </Tab>
          <Tab key="goedgekeurd" title="goedgekeurd" className="text-base">
            <DashTab 
              reserveringen={data.goedgekeurd}
              handleInfo={handleInfoModal}
              handleMail={handleMailModal}
              weigeren
            />
          </Tab>
          <Tab key="afgewezen" title="afgewezen" className="text-base">
            <DashTab 
              reserveringen={data.afgewezen}
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
        onChange={refetch}
      />
      <div className="hidden print:block">
        <PrintCards reserveringen={data.goedgekeurd}/>
      </div>
    </>
  );
}
