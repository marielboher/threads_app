
import { likeThread } from "@/lib/actions/thread.actions";

export default async function handler(req:any , res:any) {
  if (req.method === 'POST') {
    try {
      await likeThread(req.query.threadId, req.body.userId);
      res.status(200).json({ success: true });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).end(); 
  }
}
