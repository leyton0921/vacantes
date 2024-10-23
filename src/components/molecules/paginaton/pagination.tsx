import React from "react";
import styles from "./pagination.module.scss";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, paginate }) => {
    return (
        <div className={styles.pagination}>
            <button
                className={styles.paginationButton}
                disabled={currentPage === 1}
                onClick={() => paginate(currentPage - 1)}
            >
                &lt;
            </button>
            <span>Página {currentPage} de {totalPages}</span>
            <button
                className={styles.paginationButton}
                disabled={currentPage === totalPages}
                onClick={() => paginate(currentPage + 1)}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
