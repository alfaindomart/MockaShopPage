import styles from './sidebar.module.css'

export const Sidebar = () => {
    
    return (
        <div className={styles.sidebarElement}>
            <div className={styles.sidebarLayout}>
                <div className="categories">
                    <div className="clothing category">Clothing</div>
                    <div className="jewelery category">Jewelery</div>
                    <div className="electronic category">Electronic</div>
                </div>
                <div className="price">
                    <div className="smallest price-range">0 - 50</div>
                    <div className="medium price-range">50 - 100</div>
                    <div className="highest price-range">100 - 500</div>
                </div>
                <div className="sort">
                    <div className="sort-by-price">Price</div>
                    <div className="sort-by-ratings">Ratings</div>
                </div>
            </div>
        </div>
    )
}