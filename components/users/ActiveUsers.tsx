import { useOthers, useSelf } from "@/liveblocks.config";
import Avatar from "./Avatar";
import styles from './index.module.css'
import { generateRandomName } from "@/lib/utils";
import { useMemo } from "react";

const ActiveUsers = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > 3;

  const memoizedUsers = useMemo(() => {
    return (
      <div className="flex place-content-center place-items-center">
        <div className="flex">
          {currentUser && (
            <Avatar
              // src={currentUser.info.avatar} 
              otherStyle="border-[3px] border-primary-green"
              name="You" />
          )}
          {users.slice(0, 3).map(({ connectionId, info }) => {
            return (
              <Avatar
                key={connectionId}
                // src={info.avatar}
                // name={info.name} 
                name={generateRandomName()}
                otherStyles="-ml-3"
              />
            );
          })}

          {hasMoreUsers && <div className={styles.more}>+{users.length - 3}</div>}

        </div>
      </div>
    )
  }, [hasMoreUsers])

  return memoizedUsers
}

export default ActiveUsers;