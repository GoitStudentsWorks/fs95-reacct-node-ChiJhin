import { CiSettings } from 'react-icons/ci';
import { FiLogOut } from 'react-icons/fi';

export default function UserBarPopover() {
  return (
    <>
      <div>
        <button>
          <CiSettings /> Settings
        </button>
        <button>
          <FiLogOut /> Log out
        </button>
      </div>
    </>
  );
}
