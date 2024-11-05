'use server';

import { participantsData } from '../../components/datas/main/meeting/participantsData';
import { participantType } from '../../components/types/main/meeting/meetingTypes';
import { commonResListType } from '../../components/types/ResponseTypes';

export async function getParticipantsData() {
  'use server';
  const res: commonResListType<participantType> = participantsData;
  return res.result;
}
